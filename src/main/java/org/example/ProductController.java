package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/save")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productService.saveProduct(product);
        System.out.println("Recieved product: " + savedProduct);
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

    //Showing the data in table of the UI
    @GetMapping("/showAll")
    public ResponseEntity<List<Product>> showAll(){
        List<Product> showProducts=productService.findAll();
        System.out.println("fetch command triggered");
        return new ResponseEntity<>(showProducts,HttpStatus.OK);
    }

    @GetMapping("/getRequiredDetails")
    public ResponseEntity<List<ProductRequiredDTO>> showRequired(){
        List<ProductRequiredDTO> showDetails=productService.getRequiredDetails();
        System.out.println("Fetched Required Details");
        return new ResponseEntity<>(showDetails,HttpStatus.OK);
    }

}
