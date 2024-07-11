<template>
    <div 
        class="relative "
    >
        <v-select 
            class="ddl-dark ddl-white max-w-full"
            :clearable="clear"
            :disabled="disabled"
            :options="datas"
            :reduce="reduceAction"
            label="cow_data"
            placeholder="เลือกโค"
            @input="handleInput"
            v-model="value"
            :dataSelected="dataSelected"
            :multiple="multiple"
        >
            <template v-slot:no-options>
                <mdicon name="alertCircleOutline" width="12" height="12" class="inline-block"/> 
                ไม่พบข้อมูล
            </template>
        </v-select>
    </div>
</template>

<script>
import  CowService  from '@/services/cow';

export default {
    data () {
        return {
            datas: []
        }
    },

    created(){
        this.initialData()
    },
    computed:{
        value:{
            get(){
                if(this.valueType === 'object' && this.modelValue && Object.keys(this.modelValue).length > 0){
                    this.modelValue.cow_data = this.modelValue?.code + " : " + this.modelValue?.name
                }
                return this.modelValue
            },
            set(newValue){
                this.$emit('update:modelValue', newValue)
            }
        },
        user() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        async initialData () {

            const opts = {
                farm : this.user.farm._id,
                flag : 'Y',
            }

            if(this.filter?.sex){
                opts.sex = this.filter.sex
            }

            if(this.filter?.status){
                opts.status = this.filter.status
            }

            try {
                const resp = await CowService.ddl(opts);
                this.datas = [];
                if (resp) {
                    this.datas = resp.data.cows;
                    this.datas.map((x)=> x.cow_data = x.code + " : " + x.name);
                }

                if(this.defaultValue) {
                    const defaultData = this.datas.filter((x)=> x[this.defaultType] == this.defaultValue);
                    if(defaultData) {
                        this.handleInput(this.reduceAction(defaultData[0]))
                    }
                }
            } catch (error) {
                this.datas = [];
                console.error("Error: " + error.message);
            }
        },
        reduceAction (option) {
            if (this.valueType === 'object') {
                return option;
            }

            return option[this.valueType];
        },
        handleInput (text) {
            this.$emit("update:value", text);
            this.dataSelected = this.datas.find((x) => x.code === text || x.name === text);
            this.$emit("update:dataSelected", this.dataSelected);
            
        }
    },
    props: {
        clear: { default: true, type: Boolean },
        disabled: { default: false, type: Boolean },
        dataSelected: { default: null, type: Object },
        defaultType: { default: null, type: Object },
        valueType: { default: '_id', type: Object },
        defaultValue: { default: null, type: Object },
        modelValue: {
            type: [String, Number, Boolean, Array, Object],
            default: {}
        },
        multiple : { default: false, type: Boolean },
        filter : { default : null , type : Object }
    }
}
</script>


