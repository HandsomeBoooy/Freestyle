<template>
  <div class="login-form-container">
    <common-header :userAvatarDisplayFlag="false"></common-header>
    
    <div class="login-card-container">
      <dx-validation-group class="dx-card">
        <div class="login-header">
          <div class="title">
            <h2 class="bosch-name inline-M">BOSCH</h2>
            <span class="inline-M">&nbsp;&nbsp;{{ title }}</span>
          </div>
        </div>

        <div class="dx-field dx-field-container">
          <div class="dx-field-label">NT Account</div>
        </div>

        <div class="dx-field">
          <dx-text-box placeholder="" width="100%" :value.sync="uid">
            <dx-validator>
              <dx-required-rule message="Login is required" />
            </dx-validator>
          </dx-text-box>
        </div>

        <div class="dx-field dx-field-container">
          <div class="dx-field-label">Password</div>
        </div>
        <div class="dx-field">
          <dx-text-box
            placeholder=""
            width="100%"
            mode="password"
            :value.sync="pwd"
          >
            <dx-validator>
              <dx-required-rule message="Password is required" />
            </dx-validator>
          </dx-text-box>
        </div>

        <div class="dx-field">
          <dx-check-box class="common-hint-text" :value.sync="rememberUser" text="Remember me"/>
        </div>

        <div class="dx-field">
          <dx-button
            type="default"
            text="Login"
            width="100%"
            @click="onLoginClick"
          />
        </div>

        <div class="dx-field">
          <p class="version-info-container">v2.0.0&nbsp;&nbsp;&nbsp;&nbsp;Updated on 2020/06/01</p>
        </div>

        <!-- <div class="dx-field">
          <router-link to="/recovery"><a>Forgot password ?</a></router-link>
        </div>

        <div class="dx-field">
          <dx-button type="default" text="Create an account" width="100%" />
        </div> -->
    </dx-validation-group>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import DxButton from "devextreme-vue/button";
import DxCheckBox from "devextreme-vue/check-box";
import DxTextBox from "devextreme-vue/text-box";
import DxValidationGroup from "devextreme-vue/validation-group";
import DxValidator, { DxRequiredRule } from "devextreme-vue/validator";
import CommonHeader from "../../components/common-header";
// import * as axios from 'axios';
import { URL_GLOBAL } from '../../config/index';
import { UserService } from '../../providers/user-service';

import auth from "../../auth";

export default {
  data() {
    return {
      title: this.$appInfo.title,
      uid: "",
      pwd: "",
      rememberUser: false,
      userService: null
    };
  },
  methods: {
    onLoginClick(e) {
      this.userService.login({
        "uid": this.uid,
        "pwd": btoa(this.pwd.toString())
      }).then(res => {
        if (res.data.SAMAccountName.length && res.data.SAMAccountName.toLowerCase() === this.uid.toLowerCase()) {
          this.$router.push(this.$route.query.redirect || "/home");
        }
      }).catch(err => {
        console.log(err);
      });
    },
  },
  created() {
    this.userService = new UserService();
    // this.userService.login();
    if (Boolean(window.localStorage.getItem('pms_remember_status'))) {
      this.uid = window.localStorage.getItem('nt_account');
      this.pwd = window.localStorage.getItem('password');
      this.rememberUser = Boolean(window.localStorage.getItem('pms_remember_status'));
    }
  },
  watch: {
    rememberUser(newVal, preVal) {
      if (Boolean(newVal)) {
        window.localStorage.setItem('pms_remember_status', Number(newVal));
        window.localStorage.setItem('nt_account', this.uid);
        window.localStorage.setItem('password', this.pwd);
      }
    }
  },
  components: {
    DxButton,
    DxCheckBox,
    DxTextBox,
    DxValidator,
    DxRequiredRule,
    DxValidationGroup,
    CommonHeader
  }
};
</script>

<style lang="scss">
@import "../../themes/generated/variables.base.scss";
@import "../../assets/global.scss";
@import "index.scss";
</style>
