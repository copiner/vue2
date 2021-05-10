<template>
    <button
        @click="clickBtn"
        :class="classBtn"
        :disabled="isDisabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    display: 'Button按钮',
    data() {
        return {
            preCls: 'libabc-btn',
        }
    },
    props: {
        isDisabled: Boolean,
        shape: {
            type: String,
            default: '',//'circle', 'rectangle'
        },
        type: {
            type: String,
            default: 'default',//['default',success', 'warning', 'error', 'info']
            validator(value) {
                let types = ['default','success', 'warning', 'error', 'info']
                return types.includes(value) || !value
            }
        },
        size: {
            type: String,
            default: '',//['large', 'medium', 'small']
        }
    },
    computed: {
        classBtn() {
            let {preCls, type, size, shape} = this
            let className = [
                `${preCls}`,
                {
                    [`${type}`]: !!type,
                    [`${size}`]: !!size,
                    [`${shape}`]: !!shape,
                },
            ]
            //console.log(className)
            return className
        }
    },
    methods: {
        clickBtn(ev) {
            this.$emit('click', ev)
        },
    },
}
</script>
<style scoped src="./button.css"></style>
