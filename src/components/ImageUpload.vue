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
                class="lg:w-38 lg:h-38 w-28 h-28"
                :avatar="value"
                username="profile-upload"
                @click="chooseImg"
            />
        </BaseLevel>

    
</template>

<script>
    import BaseLevel from '@/components/BaseLevel.vue';
    import UserAvatar from '@/components/UserAvatar.vue';
    export default {
        computed:{
            value : {
                get(){
                    return !this.modelValue ? '/image/img-mockup.png' : this.modelValue
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
                const files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                if(files[0].size <= 1000000){
                    this.createBase64(files[0]);
                }else{
                    window.alert('ขนาดไฟล์รูปภาพต้องน้อยกว่าหรือเท่ากับ 1 MB.');
                }
            },
            createBase64(fileObj) {
                const reader = new FileReader();
                this.$emit('file',fileObj)
                reader.onload = (e) => {
                    this.value = e.target.result
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
            file : {
                type : Object,
                default : null
            },
        }
    }
</script>
