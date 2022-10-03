<template>

        <BaseLevel type="justify-center mb-1">
            <input
            id="imageUpload"
            @change="handleFile"
            type="file"
            accept="image/*"
            hidden
            />
            <img class="w-56 cursor-pointer rounded-lg" @click="chooseImg" :src="value"/>
        </BaseLevel>

    
</template>

<script>
    import BaseLevel from '@/components/BaseLevel.vue';
    export default {
        computed:{
            value:{
                get(){
                    return this.modelValue
                },
                set(newValue){
                    this.$emit('update:modelValue', newValue)
                }
            }
        },
        methods : {
            chooseImg () {
                let fileUpload = document.getElementById("imageUpload");

                if (fileUpload != null) {
                    fileUpload.click();
                }
            },
            handleFile (e) {
            var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createBase64(files[0]);
            },
            createBase64(fileObj) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.value = e.target.result;
                };
                reader.readAsDataURL(fileObj);
            },
        },
        components : {
            BaseLevel
        },
        props: {
            modelValue: {
                type: String,
                default: ''
            },
        }
    }
</script>