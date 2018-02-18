<template>
    <button class="botao" :class="estiloBotao" :type="tipo" @click="disparaAcao()">{{ rotulo }}</button>
</template>

<script>
export default {
    props: {
       tipo: {
           type: String, 
           required: true
       },

       rotulo: {
           type: String, 
           required: true
       },

       confirmacao: Boolean,
       estilo: String
   },

    methods: {
        disparaAcao() {
            if (this.confirmacao) {
                if (confirm('Deseja realizar essa operação?')) {
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {
        estiloBotao() {
           if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao';
           if(this.estilo == 'perigo') return 'botao botao-perigo';
        }
    }
}
</script>

<style scoped lang="sass">
    @import './Botao.scss'
</style>
