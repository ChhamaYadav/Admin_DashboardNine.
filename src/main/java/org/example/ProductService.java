package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }

    public boolean existsById(Long id) {
        return productRepository.existsById(id);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public List<ProductRequiredDTO> getRequiredDetails() {
        List<Product> products = productRepository.findAll(); // get full product info
        List<ProductRequiredDTO> dtos = new ArrayList<>();

        for (Product p : products) {
            String firstImage = p.getProductimage_URL().isEmpty() ? null : p.getProductimage_URL().get(0);
            dtos.add(new ProductRequiredDTO(p.getProductName(), p.getProductPrice(), firstImage));
        }
        return dtos;
    }
}
