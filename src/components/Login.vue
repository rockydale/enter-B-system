<template>
    <div id="login" class="login_container">
        <div class="login_box">
            <!-- 头像区 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>

            <!-- 登录表单区 -->
            <el-form class="login_form" ref="loginformRef" :rules="loginformRules" :model="loginform">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginform.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginform.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <!-- 按钮区 -->
                <el-form-item class="btn">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetloginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        
    </div>
</template>

<script>
import { async } from 'q';
  export default {
    data() {
      return {
          //登录表单的绑定数据
        loginform:{
            username:'MK',
            password:'123'
        },
        //表单验证规则
        loginformRules:{
            //验证用户名和密码是否合法
            username:[
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
            password:[
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ]
        }
      }
    },
    methods: {
        resetloginForm(){
            //console.log(this)
            this.$refs.loginformRef.resetFields();
        },
        login(){
            this.$refs.loginformRef.validate(async valid => {   //优化请求采用了async和await
                // console.log(valid)
                if(!valid) return;  //验证用户名或密码失败则停止

                //验证成功，发起登录请求
                const { data: res } =await this.$http.post('login',this.loginform); 
                /* {data:res} 把返回的数据变为一组数据格式 */

                if(res.meta.status !== 200) return this.$message.error('登录失败');
                this.$message.success('登录成功');
                // 1 .将登录成功后的 token，保存到客户端的sessionStorage中
                    //1.1 项目中除了登录外的其他API接口，必须在登录后才能访问
                    //1.2 token只应在当前网站打开期间生效，所以讲token保存在sessionStorage中
                    window.sessionStorage.setItem('token',res.data.token)
                //2 .通过编程式导航跳转到后台主页，路由地址是 /home   */
                   this.$router.push('/home');
            });
        }
    }
  }
</script>

<style lang="scss" scoped>
.login_container{
    background-color: aquamarine;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);

    .avatar_box{
        width: 130px;
        height: 130px;
        border: 10px solid #eee;
        box-shadow: 0 0 10px #ddd;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }   
}
.btn{
    display: flex;
    justify-content: flex-end;
}
.login_form{
    bottom: 0;
    position: absolute;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>