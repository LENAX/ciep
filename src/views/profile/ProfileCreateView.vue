<template>
  <div class="profile-edit-view">
    <vue-particles color="#dedede"></vue-particles>
    <b-container class="bv-example-row bv-example-row-flex-cols login-form-container">
      <b-row align-v="center">
        <b-col md="8" offset-md="2" lg="6" offset-lg="3" sm="12" align-self="center">
          <b-card class="auth-card bg-light-gray">
            <!-- <img src="@/assets/img/auth_bg.jpeg" class="img-fluid mb-1" alt="auth background"> -->
            <div class="card-content p-1">
              <b-tabs content-class="mt-3" justified>
                <b-tab class="reg-tab" title="上传简历" :active="$route.params.profileAction === 'upload'">
                  <b-form @submit="onProfileUpload">
                    <b-form-row class="mt-3 mb-3">
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-group
                          id="fieldset-1"
                          description="填写太麻烦？上传简历文件吧"
                          label="请上传png/jpeg/doc/docx/pdf格式的简历"
                          label-for="file-uploader"
                        >
                          <b-form-file
                            id="file-uploader"
                            v-model="profileUploadForm.file"
                            :state="Boolean(profileUploadForm.file)"
                            placeholder="请选择或者拖放文件"
                            drop-placeholder="Drop file here..."
                          ></b-form-file>
                          <div class="mt-3">已上传的文件: {{ file ? file.name : '' }}</div>
                        </b-form-group>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-button block type="submit" variant="primary">上传简历</b-button>
                      </b-col>
                    </b-form-row>
                  </b-form>
                </b-tab>
                <b-tab class="login-tab" title="填写简历" :active="$route.params.authAction === 'fill'">
                  <b-form @submit="onProfileSubmit">
                    <b-form-row class="mt-3 mb-3">
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.personName"
                          type="text"
                          required
                          placeholder="姓名"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.gender"
                          type="text"
                          required
                          placeholder="性别"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.dob"
                          type="date"
                          required
                          placeholder="生日"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.schoolName"
                          type="text"
                          required
                          placeholder="毕业院校"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.major"
                          type="text"
                          required
                          placeholder="专业"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.highestEdu"
                          type="text"
                          required
                          placeholder="最高学历"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.graduateYear"
                          type="text"
                          required
                          placeholder="毕业年份"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.lastCompany"
                          type="text"
                          required
                          placeholder="最后任职于"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.lastPosition"
                          type="text"
                          required
                          placeholder="最后任职岗位"
                        ></b-form-input>
                      </b-col><b-col cols="8" offset="2" class="mt-3">
                        <b-form-select
                          v-model="profileForm.expectIndustry"
                          :options="profileFormIndustryOptions">
                        </b-form-select>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.expectPosition"
                          type="text"
                          required
                          placeholder="期望岗位"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-select
                          v-model="profileForm.expectSalary"
                          :options="profileFormSalaryOptions">
                        </b-form-select>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="profileForm.expectWorkCity"
                          type="text"
                          required
                          placeholder="期望工作城市"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-group label="是否为海归">
                          <b-form-radio v-model="selected" name="是" value="true">是</b-form-radio>
                          <b-form-radio v-model="selected" name="否" value="false">否</b-form-radio>
                        </b-form-group>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-textarea
                          id="textarea"
                          v-model="profileForm.selfComment"
                          placeholder="请填写自我评价"
                          rows="3"
                          max-rows="6"
                        ></b-form-textarea>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-group
                          id="fieldset-1"
                          description="头像"
                          label="请上传png/jpeg/格式的头像"
                          label-for="file-uploader"
                        >
                          <b-form-file
                            id="file-uploader"
                            v-model="profileForm.avatar"
                            :state="Boolean(profileForm.avatar)"
                            placeholder="请选择或者拖放文件"
                            drop-placeholder="请在这里拖放文件"
                          ></b-form-file>
                          <div class="mt-3">已上传的文件: {{ profileForm.avatar ? profileForm.avatar.name : '' }}</div>
                        </b-form-group>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-button block type="submit" variant="primary">提交简历</b-button>
                      </b-col>
                    </b-form-row>
                  </b-form>
                </b-tab>
              </b-tabs>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'UserAuthView',
  data () {
    return {
      profileUploadForm: {
        file: null
      },
      profileFormIndustryOptions: [{

      }],
      profileFormSalaryOptions: [{}],
      profileForm: {
        phone: '',
        avatar: '',
        password: '',
        dob: '',
        schoolName: '',
        major: '',
        highestEdu: '',
        graduateYear: '',
        lastPosition: '',
        lastCompany: '',
        expectIndustry: '',
        expectPosition: '',
        expectSalary: '',
        expectWorkCity: '',
        overseas: '',
        selfComment: '',
        profileFormIsOversea: false
      }
    }
  },
  methods: {
    onProfileUpload (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onProfileSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style lang="sass" scoped>
.profile-edit-view
  background: rgb(15, 28, 112)
  padding: 0 0 70px 0!important

.auth-card
  margin-top: 5vh
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

.login-tab
  padding: 0 0 70px 0!important

.reg-tab
  padding: 0 0 5px 0!important

.card-body
  padding: 0 !important

.login-form-container
  height: 100%

.w-30
  width: 30% !important

.w-70
  width: 70% !important

#particles-js
  width: 100%
  height: calc(100% - 100px)
  position: absolute
</style>
