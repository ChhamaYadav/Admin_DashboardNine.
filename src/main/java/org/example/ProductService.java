package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product){
            return productRepository.save(product);
        }

     public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
     }

    public boolean existsById(Long id) {
        return productRepository.existsById(id);
    }

    public List<Product> findAll(){
        return productRepository.findAll();
    }
}
