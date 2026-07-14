<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>

  <!-- Navbar -->
  <Navbar />

  <!-- Login Form -->
  <section class="login-section">

    <div class="login-card">

      <div class="avatar">
        👤
      </div>

      <h2>Login</h2>

      <p class="subtitle">
        เข้าสู่ระบบด้วยบัญชีของคุณ
      </p>

      <form @submit.prevent>

        <div class="form-group">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

        </div>

        <div class="form-group">

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

        </div>

        <button class="btn-login">
          Login
        </button>

      </form>

      <div class="register">
        ยังไม่มีบัญชี ?
        <a href="#">Create Account</a>
      </div>

    </div>

  </section>

</template>

<style scoped>

/* =======================
   Login Section
======================= */

.login-section{

    margin-top:-500px;

    min-height:550px;

    display:flex;

    justify-content:center;

    align-items:center;

    padding-bottom:80px;

}


/* =======================
   Login Card
======================= */

.login-card{

    width:340px;

    background:#fff;

    padding:28px;

    border-radius:18px;

    box-shadow:0 10px 25px rgba(0,0,0,.15);

    text-align:center;

}


/* =======================
   Avatar
======================= */

.avatar{

    width:65px;

    height:65px;

    margin:auto;

    border-radius:50%;

    background:#EAF4FF;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:32px;

}


/* =======================
   Title
======================= */

.login-card h2{

    margin-top:15px;

    color:#5B7DB1;

    font-size:28px;

}

.subtitle{

    color:#888;

    font-size:14px;

    margin-bottom:20px;

}


/* =======================
   Form
======================= */

.form-group{

    text-align:left;

    margin-bottom:18px;

}

.form-group label{

    display:block;

    margin-bottom:6px;

    color:#555;

    font-weight:600;

}

.form-group input{

    width:100%;

    padding:10px 12px;

    border:1px solid #d9d9d9;

    border-radius:8px;

    font-size:15px;

    transition:.3s;

}

.form-group input:focus{

    outline:none;

    border-color:#8CB9FF;

    box-shadow:0 0 6px rgba(140,185,255,.4);

}


/* =======================
   Button
======================= */

.btn-login{

    width:100%;

    margin-top:10px;

    padding:12px;

    border:none;

    border-radius:8px;

    background:#8CB9FF;

    color:white;

    font-size:16px;

    cursor:pointer;

    transition:.3s;

}

.btn-login:hover{

    background:#6FA8FF;

}


/* =======================
   Register
======================= */

.register{

    margin-top:18px;

    color:#666;

    font-size:14px;

}

.register a{

    color:#5B7DB1;

    text-decoration:none;

    font-weight:bold;

}

.register a:hover{

    color:#6FA8FF;

}


/* =======================
   Responsive
======================= */

@media (max-width:768px){

    .login-section{

        margin-top:-350px;

        padding:20px;

    }

    .login-card{

        width:90%;

        max-width:340px;

    }

}

</style>