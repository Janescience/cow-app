<template>
    <CardBoxCollapse
        title="ค้นหา"
        icon=""
        form
        class="mb-2"
        header-icon=""
        :collapse="collapse"
        @submit.prevent="submit"
        @reset.prevent="reset"
    >
        <div class="grid gap-5" :class="[grid]">
            <FormField 
                v-for="form in forms" 
                :key="form.value" 
                :label="form.label" 
                :class="[form.class]"
            >
                <DDLCow 
                    v-if="form.type === 'ddl' && form.module === 'cow' " 
                    v-model="search[form.value]"
                    :valueType="form.valueType"
                    :filter="form.filter"
                />
                <DDLCow 
                    v-else-if="form.type === 'ddl-multiple' && form.module === 'cow' " 
                    v-model="search[form.value]"
                    :valueType="form.valueType"
                    mutiple
                />
                 <DDLRecipe 
                    v-else-if="form.type === 'ddl' && form.module === 'recipe' " 
                    v-model="search[form.value]"
                    :valueType="form.valueType"
                />
                <DDLVaccine 
                    v-else-if="form.type === 'ddl' && form.module === 'vaccine' " 
                    v-model="search[form.value]"
                    :valueType="form.valueType"
                />
                <DDLCorral
                    v-else-if="form.type === 'ddl' && form.module === 'corral' " 
                    v-model="search[form.value]"
                    :valueType="form.valueType"
                />
                <FormCheckRadioPicker
                    v-else-if="form.type === 'radio' "
                    v-model="search[form.value]"
                    :type="form.type"
                    :options="form.options"
                    :required="form.required"
                />
                <FormControl
                    v-else
                    v-model="search[form.value]"
                    :icon="form.icon"
                    :options="form.options"
                    :type="form.type"
                    :required="form.required"
                />
            </FormField>
        </div>

        <BaseDivider/>

        <BaseButtons
            type="justify-center"
            no-wrap
        >
            <BaseButton
                type="submit"
                color="info"
                :label="btnSubmitLabel"
                :loading="btnLoading"
                :disabled="btnLoading"
            />
            <BaseButton
                type="reset"
                color="danger"
                label="ล้าง"
            />
        </BaseButtons>
    </CardBoxCollapse>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import CardBoxCollapse from "@/components/CardBoxCollapse.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import FormCheckRadioPicker from "@/components/FormCheckRadioPicker.vue";
import DDLCow from "@/components/DDL/Cow.vue";
import DDLRecipe from "@/components/DDL/Recipe.vue";
import DDLVaccine from "@/components/DDL/Vaccine.vue";
import DDLCorral from "@/components/DDL/Corral.vue";

export default {
    props : {
        grid : {
            type : String,
            default : 'grid-cols-4'
        },
        forms : {
            type : Array,
            default : []
        },
        search : {
            type : Object,
            default : null
        },
        collapse : Boolean,
        btnSubmitLabel : {
            type : String ,
            default : 'ค้นหา'
        },
        btnLoading : Boolean,
    },
    components : {
        BaseButton,
        BaseButtons,
        BaseDivider,
        CardBoxCollapse,
        FormField,
        FormControl,
        FormCheckRadioPicker,
        DDLCow,
        DDLRecipe,
        DDLVaccine,
        DDLCorral
    },
    methods : {
        submit(){
            this.$emit('search',this.search)
        },
        reset(){
            this.$emit('reset',this.search)
        }
    }
}
</script>
