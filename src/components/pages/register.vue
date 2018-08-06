<template>
     <div>
       <van-nav-bar
        title="用户注册"
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
            @click-icon="username = ''" 
        />
 
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        <div class="register-button">
            <van-button type="primary" @click="axiosRegisterUser" size="large" :loading="openLoading">马上注册</van-button>
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
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        axiosRegisterUser(){
            this.$http({
                url:url.registerUser,
                method:"post",
                data:{
                  username:this.username,
                  password:this.password,
                  usernameErrorMsg:'',   //当用户名出现错误的时候
                  passwordErrorMsg:'',     
                }
            }).then(response => {
                console.log(response)
                //如果返回code为200，代表注册成功，我们给用户作Toast提示
                if(response.data.code == 200){
                    Toast.success('注册成功')
                    this.$router.push('/')
                }else{
                    console.log(response.data.message)
                    Toast.fail('注册失败')
                    this.openLoading=false
                }
                    
            }).catch((error) => {   
                Toast.fail('注册失败')
                this.openLoading=false
            })
        }
    }
}
</script>

<style>

</style>
