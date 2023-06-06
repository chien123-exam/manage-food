<template>
    <div>
        <slot name="header">
            <Header />
        </slot>
        <slot name="content"></slot>
        <slot name="footer">
            <Footer />
        </slot>
    </div>
</template>


<script setup>

import Header from '../layout/parations/Header.vue'
import Footer from '../layout/parations/Footer.vue'
</script>