package com.tsystems.service;

import com.tsystems.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService {
    List<Product> getProducts();
    Product addProduct(Product product);
    Product updateProduct(Product product);
    void deleteProduct(long product);
    Product findById(long id);
    void deleteProducts();
}
