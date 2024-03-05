package com.boating.nithish;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NithishApplication {

	public static void main(String[] args) {
		SpringApplication.run(NithishApplication.class, args);
	}

	// @Bean
	// public CommandLineRunner commandLineRunner(UserService userService) {
	// return args -> {
	// var user =
	// RegisterRequest.builder().name("Admin").email("admin@gmail.com").password("Admin@123")
	// .mobile("9345049320").role("ADMIN").build();
	// userService.register(user);
	// };
	// }

}
