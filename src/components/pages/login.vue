<template>
     <div>
       <van-nav-bar
        title="用户登陆"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
 
        <div class="register-panel">
        <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            :error-message="usernameErrorMsg"
            @click-icon="username = ''" 
        />
 
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            :error-message="passwordErrorMsg"
        />
        <div class="register-button">
            <van-button type="primary" @click="LoginAction" size="large" :loading="openLoading">登陆</van-button>
        </div>
       </div>
 
    </div>
</template>

<script>
import url from "@/serviceAPi.config.js"
import { Toast } from 'vant'
export default {
    data () {
        return {
            username:'',
            password:'',
            openLoading: false, //是否开启用户的Loading
            usernameErrorMsg:'',   //当用户名出现错误的时候
            passwordErrorMsg:'',   
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        axioLoginUser(){
            this.openLoading = true
            this.$http({
                url:url.registerUser,
                method:"post",
                data:{
                  userName:this.username,
                  password:this.password,
                }
            }).then(response => {
                console.log(response)
               
            }).catch((error) => {   
               
            })
        },
        checkForm(){
            let isOk= true
            if(this.username.length<5){
                this.usernameErrorMsg="用户名不能小于5位"
                isOk= false
            }else{
                this.usernameErrorMsg=''
            }
            if(this.password.length<6){
                this.passwordErrorMsg="密码不能少于6位"
                isOk= false
            }else{
                this.passwordErrorMsg=''
            }
            return isOk
        },
        
        LoginAction(){
            // this.checkForm() && this.axioLoginUser()  或者
            if(this.checkForm()){
                this.axioLoginUser()
            }
        },
    }
}
</script>

<style>

</style>
