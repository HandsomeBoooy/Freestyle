<template>
    <div class="common-headerbar">
      <div class="header-colorful-stripe">
        <img src="../assets/images/headbar-illustration.png" alt="">
      </div>

      <div class="header-row-container">
        <div class="logo-container inline-M">
          <img src="../assets/images/Bosch_logo.svg" alt="">
        </div>
        <div class="system-name-container inline-M">
          <h2>
            Project Management System
          </h2>
        </div>
        <div class="login-component inline-M pull-right">
            <user-panel
                :menu-items="userMenuItems"
                menu-mode=""
                slot="menuUserItem"
                v-if="userAvatarDisplayFlag"
            />
        </div>
      </div>
    </div>
</template>

<script>
import UserPanel from "./user-panel";

export default {
    name: 'CommonHeader',
    props: {
        userAvatarDisplayFlag: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            userMenuItems: []
        }
    },
    components: {
        UserPanel
    }
}
</script>>

<style lang="scss">
    .common-headerbar {
        width: 100%;
        background: none #ffffff no-repeat;
    
        .header-colorful-stripe {
            line-height: 1;
    
            img {
                width: 100%;
                height: 37px;
            }
        }
    
        .header-row-container {
            height: 70px;
            padding: 13px 55px;
            line-height: 20px;
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 0px 3px 6px -2px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0);
    
            .logo-container {
                line-height: 1;
    
                img {
                    width: 200px;
                    line-height: 1;
                }
            }
            .system-name-container {
                h2 {
                    margin: 0;
                    margin-left: 55px;
                    color: rgba(16, 16, 16, 1);
                    line-height: 43px;
                    font-size: 30px;
                    font-weight: bold;
                }
            }
        }
        .login-component {
            line-height: 43px;
        }
    }
</style>