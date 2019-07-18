<template>
  <div class="order-package-item">
    <div class="orderInfo">
      <p class="orderLimit">一个月有效期</p>
      <p class="orderDiscount">河南省内联通用户优惠10.01元！</p>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style>
.orderInfo {
  width: 500px;
  background-color: aqua;
}
.orderLimit {
  font-size: 26px;
  color: #333;
  margin-bottom: 10px;
}
.orderDiscount {
    display: inline-block;
  border-radius: 5px;
  border: 1px solid #ff9a0c;
  padding: 10px;
  color: #ff9a0c;
  font-size: 26px;
}
</style>
