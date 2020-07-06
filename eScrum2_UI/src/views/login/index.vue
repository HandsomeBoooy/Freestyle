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
          <dx-text-box placeholder="" width="100%" :value.sync="login">
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
            :value.sync="password"
          >
            <dx-validator>
              <dx-required-rule message="Password is required" />
            </dx-validator>
          </dx-text-box>
        </div>

        <div class="dx-field">
          <dx-check-box class="common-hint-text" :value.sync="rememberUser" text="Remember me" />
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
          <router-link to="/recovery"><a>Forgot password ?</a></router-link>
        </div>

        <div class="dx-field">
          <dx-button type="default" text="Create an account" width="100%" />
        </div>
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
      login: "",
      password: "",
      rememberUser: false,
      userService: null
    };
  },
  methods: {
    onLoginClick(e) {
      if (!e.validationGroup.validate().isValid) {
        return;
      }

      auth.logIn();
      this.$router.push(this.$route.query.redirect || "/home");

      e.validationGroup.reset();
    },

    uploadFile($ev) {
      let file = $ev.target.files[0];
      let reader = new FileReader();
      reader.onloadend = event => {
        debugger;
        console.log(event.target)
      }
      reader.readAsArrayBuffer(file);
    },

    dxUploadStarted($ev) {
      let files = arguments[0].value;
      debugger;
      console.log(files[0], files[0].getAsDataURL());
    },

    fileManager_customizeDetailColumns(columns) {
      console.log(columns);
      return columns;
    }
  },
  created() {
    this.userService = new UserService();
    // this.userService.login();
    this.userService.login({});
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
