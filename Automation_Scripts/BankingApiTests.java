package com.neobank.api.tests;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.BeforeClass;
import org.junit.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

/**
 * Enterprise API Test Suite for NeoBank Core
 * Demonstrates: RestAssured, JSON Validation, and Security Headers
 */
public class BankingApiTests {

    @BeforeClass
    public static void setup() {
        RestAssured.baseURI = "https://api.neobank-internal.com/v1";
        // In real scenarios, use environment variables for keys
        RestAssured.authentication = oauth2("mock_access_token_7788");
    }

    @Test
    public void test_KycVerification_Requirement_BR01() {
        /*
         * BR-01: User must provide valid SSN/TIN for KYC.
         */
        String requestBody = "{" +
                "\"first_name\": \"John\"," +
                "\"last_name\": \"Doe\"," +
                "\"ssn\": \"999-00-1111\"," +
                "\"dob\": \"1990-01-01\"" +
                "}";

        given()
            .contentType(ContentType.JSON)
            .body(requestBody)
        .when()
            .post("/customer/verify")
        .then()
            .statusCode(200)
            .body("status", equalTo("VERIFIED"))
            .body("kyc_reference", notNullValue());
    }

    @Test
    public void test_TransferSecurity_Requirement_BR14() {
        /*
         * BR-14: Multi-Factor Authentication (MFA) check on large transfers.
         */
        given()
            .header("X-Transfer-Amount", "15000") // Above $10k limit
            .contentType(ContentType.JSON)
        .when()
            .post("/transfer/initiate")
        .then()
            .statusCode(403)
            .body("error_code", equalTo("MFA_REQUIRED"))
            .body("message", containsString("Additional verification needed for high-value transfer"));
    }

    @Test
    public void test_PiiDataLeakage_Requirement_BR17() {
        /*
         * BR-17: Ensure API responses do NOT leak raw PII.
         */
        when()
            .get("/customer/profile/101")
        .then()
            .statusCode(200)
            .body("ssn", matchesPattern("^XXX-XX-\\d{4}$")) // Masked format check
            .body("raw_ssn", nullValue()); // Ensure raw field is never present
    }
}
