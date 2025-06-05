<script setup>

    import {ApplyTypeList} from './apply'
    import { reactive, ref, toRaw } from 'vue';
const formRef = ref();
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  name: '',
  region: undefined,
  date1: undefined,
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const rules = {
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'change',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  date1: [
    {
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
      type: 'object',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    {
      required: true,
      message: 'Please input activity form',
      trigger: 'blur',
    },
  ],
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch(error => {
      console.log('error', error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};

</script>



<template>
    <div class="navigation">
        <div>
            <a-menu v-model:selectedKeys="current" mode="horizontal" :items="ApplyTypeList"
                @click="selectedProductType"  />
        </div>
    </div>


  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >

    <a-form-item label="申请人" name="region">
      <a-select v-model:value="formState.region" placeholder="请选择申请人">
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="务类型" name="region">
      <a-select v-model:value="formState.region" placeholder="请选服务类型">
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="请选服务项目" name="region">
      <a-select v-model:value="formState.region" placeholder="请选服务项目">
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item ref="name" label="上门时间" name="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>


    <a-form-item label="Activity time" required name="date1">
      <a-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </a-form-item>

    <a-form-item label="Activity type" name="type">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources" name="resource">
      <a-radio-group v-model:value="formState.resource">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form" name="desc">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>

</template>



<style scoped>

.navigation {
    width: 86%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}
</style>