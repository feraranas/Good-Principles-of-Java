package com.example.interfacesjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InterfacesJavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(InterfacesJavaApplication.class, args);
        implementingInterfaces geometry = new implementingInterfaces();

        geometry.Circle();

        geometry.Square();

        geometry.Rectangle();

        geometry.Triangle();

        implementingNestingInterfaces obj = new implementingNestingInterfaces();

        obj.InnerMethod();
    }
}