package tn.dksoft.convention.security;

import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")
public class SecurityController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtEncoder jwtEncoder;

    @GetMapping("/profile")
    public Authentication authentication(Authentication authentication) {
        System.out.println(authentication);
        String username = authentication.getName(); // Get the username of the authenticated user
       System.out.println("Welcome, " + username + "!");
        return authentication;
    }

@PostMapping(value = "/login")
    public Map<String,String> login(@RequestBody Map<String, String> request)
    {     String username = request.get("username");
        String password = request.get("password");
        System.out.println(username);
        Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
    Instant instant= Instant.now();
    String scope=authentication.getAuthorities().stream().map(a->a.getAuthority()).collect(Collectors.joining(" "));
        JwtClaimsSet jwtClaimsSet=JwtClaimsSet.builder().issuedAt(instant).expiresAt(instant.plus(10, ChronoUnit.MINUTES))
                .subject(username)
                .claim("scope",scope)
                .build();
        JwtEncoderParameters jwtEncoderParameters=
                JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS512).build(),jwtClaimsSet);
        String jwt=jwtEncoder.encode(jwtEncoderParameters).getTokenValue();
        System.out.println(jwt);
        return Map.of("access-token",jwt);


    }
}
