<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar>
    <h1>Login</h1>
    <p>เลือกซื้อสินค้าคุณภาพในราคาพิเศษ</p>

    <div class="container">
    <form class="login-form">
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
  </Navbar>

  
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.login-form {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.login-form input,
.login-form button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form button {
  background: #0d6efd;
  color: white;
  border: none;
  cursor: pointer;
}

.login-form button:hover {
  background: #0b5ed7;
}
</style>