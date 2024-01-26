<template>
    <div 
        class="relative "
    >
        <v-select 
            class="ddl-dark ddl-white"
            :clearable="clear"
            :disabled="disabled"
            :options="datas"
            :reduce="reduceAction"
            label="vaccine_data"
            placeholder="เลือกวัคซีน"
            @input="handleInput"
            v-model="value"
            :dataSelected="dataSelected"
            :multiple="multiple"
        >
            <template v-slot:no-options>
                <mdicon name="alertCircleOutline" width="16" height="16" class="inline-block"/> 
                ไม่พบข้อมูล
            </template>
        </v-select>
    </div>
</template>

<script>
import  VaccineService  from '@/services/vaccine';

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
                if(this.valueType === 'object' && Object.keys(this.modelValue).length > 0){
                    this.modelValue.vaccine_data =  this.modelValue?.name
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

            try {
                const resp = await VaccineService.all();
                this.datas = [];
                if (resp) {
                    this.datas = resp.data.vaccines;
                    this.datas.map((x)=> x.vaccine_data =  x.name);
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
            this.dataSelected = this.datas.find((x) => x.name === text );
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
        multiple : { default: false, type: Boolean }
    }
}
</script>


