package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;

import java.security.Key;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        LOGGER.info("START - authenticate()");
        Map<String, String> map = new HashMap<>();

        if (authHeader == null) {
            LOGGER.warn("Authorization header is missing!");
            map.put("token", "");
        } else {
            LOGGER.debug("Authorization Header: {}", authHeader);
            String username = getUser(authHeader);
            LOGGER.debug("Username extracted: {}", username);

            String token = generateJwt(username);
            LOGGER.debug("Generated JWT Token: {}", token);

            map.put("token", token);
        }

        LOGGER.info("END - authenticate()");
        return map;
    }

    private String getUser(String authHeader) {
        LOGGER.debug("START - getUser()");
        try {
            String encodedCredentials = authHeader.substring("Basic".length()).trim();
            byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
            String decodedCredentials = new String(decodedBytes, StandardCharsets.UTF_8);
            String username = decodedCredentials.split(":")[0];
            LOGGER.debug("Decoded Username: {}", username);
            System.out.println("Extracted Username is: "+ username);
            LOGGER.debug("END - getUser()");
            return username;
        } catch (Exception e) {
            LOGGER.error("Error decoding Authorization header", e);
            return null;
        }
    }

    private String generateJwt(String username) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        String base64Key = Encoders.BASE64.encode(key.getEncoded());
        System.out.println("Base64 Key: " + base64Key);

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1200000)) // 20 minutes
                .signWith(key)
                .compact();
    }
}
