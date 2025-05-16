package org.example;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductRequiredDTO {
    private String productName;
    private double ProductPrice;
    private String productimageURL;

    public ProductRequiredDTO(String productName, double productPrice) {
        this.productName = productName;
        this.ProductPrice = productPrice;
    }

}
