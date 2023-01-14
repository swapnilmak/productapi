package com.tsystems.service;

import com.tsystems.dao.ProductRepository;
import com.tsystems.exception.NoSuchProductExistsException;
import com.tsystems.exception.ProductAlreadyExistsException;
import com.tsystems.model.Product;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

public class ProductService implements IProductService{

    @Autowired
    ProductRepository repository;

    @Override
    public List<Product> getProducts() {
        List<Product> products = new ArrayList<Product>();
        repository.findAll().forEach(products::add);
        return products;
    }

    @Override
    public Product addProduct(Product product) {
        return repository.save(product);//return "Customer added successfully";
    }

    @Override
    public Product updateProduct(Product product) {
        Product existingProduct = repository.findById(product.getId()).orElse(null);
        if (existingProduct == null) {
            throw new NoSuchProductExistsException("No Such Product exists!!");
        }else{
            existingProduct.setName(product.getName());
            existingProduct.setDescription(product.getDescription());
            existingProduct.setDetails(product.getDetails());
            return repository.save(product);
        }
    }

    @Override
    public void deleteProduct(long product) {
        repository.deleteById(product);
    }

    @Override
    public Product findById(long id) {
        return repository.findById(id).orElseThrow(
                () -> new NoSuchElementException("NO Product PRESENT WITH ID = " + id));
    }

    @Override
    public void deleteProducts() {
        repository.deleteAll();
    }
}
