import React from 'react';
import Grid from '@material-ui/core'

const products = [
    { id:2, name: 'iPhone 11', description: 'Apple iPhone 11'},
    { id:3, name: 'Galaxy s10', description: 'Samsung Galaxy s10'},


];


const Products = () => {
    <main>
        <Grid container justify ="center" spacing={4}>
            {products.map((product) => (
            <Grid itme key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Products />
            </Grid>
            ))}
        </Grid>

    </main>
}


export default Products; 