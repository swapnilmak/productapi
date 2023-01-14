package com.tsystems.config;

import com.tsystems.service.IProductService;
import com.tsystems.service.ProductService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean("productService")
    IProductService productService(){
        ProductService service = new ProductService();
        return service;
    }

}
