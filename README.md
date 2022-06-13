# tr-product-card

Este es un paquete npm de pruebas

### Thomas Carreno

## Ejemplo
```
import{
  ProductImage,
  ProductTitle,
  ProductButton,
  ProductCard
  }from'do-product-card';
```
```
<ProductCard
product={product}
initialValue={{
          count: 4,
          maxCount: 10,
        }} >
{({ count, isMaxReached, maxCount, product, increasBy, reset }) => (
<>
<ProductImage />
<ProductTitle />
<ProductButton />
</>
)}
</ProductCard>
```