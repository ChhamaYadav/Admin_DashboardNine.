package org.example;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {

    @Query("SELECT new org.example.ProductRequiredDTO(p.productName, p.productPrice) FROM Product p")
    List<ProductRequiredDTO> findRequiredDetails();
}
