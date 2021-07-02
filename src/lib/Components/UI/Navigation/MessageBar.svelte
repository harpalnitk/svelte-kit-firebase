<script>
    import uiStore from '../../../../stores/uiStore';

    $: msg = $uiStore.msg;
    $: type = $uiStore.type;
</script>
{#if msg}
<div class="msg-bar" class:danger={type === 'danger' ? true : false} class:success={type === 'success' ? true : false}>
    <span class="msg">
       {msg}
    </span>
    <span class='icon' on:click={()=>{msg=''}}>&#10060;</span>
</div>
{/if}

<style lang="scss">
    @import '../../../../styles/vars';
    .msg-bar{
        width: auto;
        padding: 1rem;
        color: white;
        display: flex;
       justify-content: space-between;
    }
    .msg {
        margin-left: 2rem;
        text-align: center;
    }
    .danger {
        background: $color-danger-secondary;
    }
    .success {
        background: $color-success-secondary;
    } 
    .icon{
        cursor: pointer;
        transition: all .2s ease;
        opacity: 1;
        &:hover{
          transform: scale(1.1);
          opacity: .8;
        }
        &:active{
          transform: scale(.9);
          opacity: .5;
        }
    }
   
    </style>