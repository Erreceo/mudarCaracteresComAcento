var a = `
insert into BRADESCO.GEN_LABEL_IDIOMA (id_label_idioma, id_idioma, id_label, ds_label, id_organizacao)
values (BRADESCO.SEQ_GEN_LABEL_IDIOMA.nextval, 1, BRADESCO.SEQ_GEN_LABEL_IDIOMA.currval, 'Canal', 5);

insert into BRADESCO.GEN_LABEL_IDIOMA (id_label_idioma, id_idioma, id_label, ds_label, id_organizacao)
values (BRADESCO.SEQ_GEN_LABEL_IDIOMA.nextval, 1, BRADESCO3.SEQ_GEN_LABEL_IDIOMA.currval, 'Canal', 5);

INSERT INTO BRADESCO.GEN_FORMULARIO (ID_FORMULARIO, ID_LABEL, TP_ACAO, DS_OBJETIVO, FG_PRINCIPAL, ID_FORMULARIO_PAI, NR_ORDEM, ID_LABEL_GRP, ID_INSTRUCAO, ID_ORGANIZACAO, TP_FORMULARIO)
VALUES (BRADESCO.SEQ_GEN_FORMULARIO.nextval, BRADESCO.SEQ_GEN_LABEL_IDIOMA.currval, null, null, 'N',
        (select ID_FORMULARIO from BRADESCO.GEN_FORMULARIO where ID_LABEL in (
select ID_LABEL from BRADESCO.GEN_LABEL_IDIOMA where upper(DS_LABEL) = upper('Fase para Análise')) and
                                   ID_FORMULARIO_PAI in ( select ID_FORMULARIO from BRADESCO.GEN_FORMULARIO where ID_LABEL in (select ID_LABEL from BRADESCO.GEN_LABEL_IDIOMA where upper(DS_LABEL) = upper('Cadastro de Documento'))) )
        , null, BRADESCO.SEQ_GEN_LABEL_IDIOMA.currval, null, 5, 'E');

INSERT INTO BRADESCO.GEN_FORM_BLOCO (ID_FORM_BLOCO, ID_FORMULARIO, ID_LABEL, TP_FORM_BLOCO, ID_ENTIDADE, DS_OBJETIVO, NM_HTML, NM_JAVA_SCRIPT, NM_HTML_CH, NM_JAVA_SCRIPT_CH, ID_ORGANIZACAO, ID_DOMINIO, FG_CONTEUDO_TOTAL, DS_CARAC_ESP)
VALUES (BRADESCO.SEQ_GEN_FORM_BLOCO.NEXTVAL, BRADESCO.SEQ_GEN_FORMULARIO.currval, BRADESCO.SEQ_GEN_LABEL_IDIOMA.currval, 'E', NULL, null, './src/interno/documentoFaseCanal/documentoFaseCanal.conteudo.html', './src/interno/documentoFaseCanal/documentoFaseCanal.conteudo.js', null, null, 5, null, null, null);



INSERT INTO BRADESCO3.GEN_DOMINIO_CAMPO (ID_DOMINIO_CAMPO, ID_DOMINIO, NM_COLUNA, TP_CAMPO, ID_COLUNA, ID_DOMINIO_ITEM, DS_DEFAULT, ID_ORGANIZACAO, DS_ORIGEM_TAG, DS_ORIGEM_CONDICAO) VALUES (145, 17, null, 'P', 2624, null, '@organizacao', 5, null, null);

commit;`
var b = a.split('');

var x = b.map( value => {
  if(value.charCodeAt(0)>122){
    return `'||chr(${value.charCodeAt(0)})||'`
  }else{
    return value;
  }
})

console.log(x.join(''));