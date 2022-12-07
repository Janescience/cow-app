<template>
    <CardBox
        title="ค้นหา"
        icon=""
        form
        class="mb-3"
        header-icon=""
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
                />
                <DDLCow 
                    v-else-if="form.type === 'ddl-multiple' && form.module === 'cow' " 
                    v-model="search[form.value]"
                    :valueType="form.valueType"
                    mutiple
                />
                <FormCheckRadioPicker
                    v-else-if="form.type === 'radio' "
                    v-model="search[form.value]"
                    :type="form.type"
                    :options="form.options"
                />
                <FormControl
                    v-else
                    v-model="search[form.value]"
                    :icon="form.icon"
                    :options="form.options"
                    :type="form.type"
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
                label="ค้นหา"
            />
            <BaseButton
                type="reset"
                color="danger"
                label="ล้าง"
            />
        </BaseButtons>
    </CardBox>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import FormCheckRadioPicker from "@/components/FormCheckRadioPicker.vue";
import DDLCow from "@/components/DDL/Cow.vue";

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
        }
    },
    components : {
        BaseButton,
        BaseButtons,
        BaseDivider,
        CardBox,
        FormField,
        FormControl,
        FormCheckRadioPicker,
        DDLCow
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
