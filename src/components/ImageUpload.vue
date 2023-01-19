<template>

        <BaseLevel type="justify-center items-center align-middle mb-2 " role="button">
            <input
            id="imageUpload"
            @change="handleFile"
            type="file"
            accept="image/*"
            hidden
            />
            <UserAvatar
                class="lg:w-40 lg:h-40 w-32 h-32"
                :avatar="value"
                @click="chooseImg"
            />
        </BaseLevel>

    
</template>

<script>
    import BaseLevel from '@/components/BaseLevel.vue';
    import UserAvatar from '@/components/UserAvatar.vue';
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
            BaseLevel,
            UserAvatar
        },
        props: {
            modelValue: {
                type: String,
                default: ''
            },
        }
    }
</script>