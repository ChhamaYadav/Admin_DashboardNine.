package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/save")
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        Product savedProduct =productService.saveProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

//    Deleting the product
@DeleteMapping("/delete/{id}")
public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
    if (productService.existsById(id)) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    } else {
        return ResponseEntity.notFound().build();
    }
}
}
