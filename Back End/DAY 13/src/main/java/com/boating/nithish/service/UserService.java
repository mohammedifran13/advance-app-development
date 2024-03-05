package com.boating.nithish.service;

import java.security.Principal;

import com.boating.nithish.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}
