package com.boating.nithish.service;

import java.io.IOException;

import com.boating.nithish.dto.request.LoginRequest;
import com.boating.nithish.dto.request.RegisterRequest;
import com.boating.nithish.dto.response.LoginResponse;
import com.boating.nithish.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
