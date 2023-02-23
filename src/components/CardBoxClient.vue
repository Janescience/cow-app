<script setup>
import { computed } from 'vue'
import { mdiTrendingDown, mdiTrendingUp, mdiTrendingNeutral } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import PillTag from '@/components/PillTag.vue'
import PillTagTrend from '@/components/PillTagTrend.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import NumberDynamic from '@/components/NumberDynamic.vue'
import numeral from 'numeral'

const props = defineProps({
  img : {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  subText: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  amt: {
    type: Number,
    default: 0
  },
  text: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: null
  },
  quality : {
    type : Number
  },
  status : {
    type : Number
  }
})

const pillType = computed(() => {
  if (props.type) {
    return props.type
  }

  if (props.amt) {
    if (props.amt >= 60) {
      return 'success'
    }
    if (props.amt >= 40) {
      return 'warning'
    }

    return 'danger'
  }

  return 'info'
})

const qualityStyle = computed(() => {


  if (props.quality == 2) {
    return {
      icon: 'crownCircleOutline',
      style: 'text-amber-400'
    }
  }

})

const statusStyle = computed(() => {
  if (props.status == 1) {
    return {
      icon: 'humanPregnant',
      style: 'warning'
    }
  }

  if (props.status == 2) {
    return {
      icon: 'waterOff',
      style: 'danger'
    }
  }

  if (props.status == 3) {
    return {
      icon: 'water',
      style: 'success'
    }
  }

  if (props.status == 4) {
    return {
      icon: 'babyFaceOutline',
      style: 'light'
    }
  }

})



</script>

<template>
  <CardBox
    hoverable
  >
      <BaseLevel
        type="justify-center"
        class="mb-1 "
        mobile
      >
        <BaseIcon
          :class="statusStyle.style"
          :path="statusStyle.icon"
          size="20"
        />
        
      </BaseLevel>
      <BaseLevel type="justify-center">
        <UserAvatar
          username="profile-card"
          class="lg:w-32 lg:h-32 w-24 h-24"
          :avatar="img"
        />
      </BaseLevel>
    <div class="text-center mt-2">
      <h4 class="lg:text-xl text-md ">
        <BaseIcon
          v-if="qualityStyle"
          :class="qualityStyle.style"
          :path="qualityStyle.icon"
          size="20"
        />
        {{ name }} 
      </h4>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        {{ subText }}
      </p>
    </div>
  </CardBox>
</template>
