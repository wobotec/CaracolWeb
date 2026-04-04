import PageBase from "../../../Layout/PageBase/PageBase";
import ChangePassword from "./ChangePassword";
import NotificationPreferences from "./NotificationPreferences";
import agt from "../../../../assets/img/agt.png";
import caracollogo from "../../../../assets/img/caracol.png";

export default function Settings() {
  return (
    <PageBase title="Configurações">
      <div class="tabs-container">
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#tab-1">SISTTEMA</a></li>
          <li class=""><a data-toggle="tab" href="#tab-2">DADOS DA ESCOLA</a></li>
          <li class=""><a data-toggle="tab" href="#tab-3">SOBRE</a></li>
        </ul>
        <div class="tab-content">
          <div id="tab-1" class="tab-pane active">
            <div class="panel-body">

              <p class="bg-silver"><strong>Opções pedagógicas</strong></p>
              {/*Tipo de horário*/}
              <div class="col-lg-4">
                <div class="ibox float-e-margins">
                  <p><strong>- Definições para horário</strong></p>
                  <div class="ibox-content">
                    <div class="form-group">
                      <label class="col-lg-6 control-label">Tipo de Horário:</label>
                      <div class="col-lg-6">
                        <select class="form-control" name="" id="">
                          <option value="">Padrão</option>
                          <option value="">Personalizado</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Horarios*/}
              <div class="col-lg-12">
                <p>As informações que serão preenchidas aqui, aparecerão no formulário de criação de
                  horário.</p>
                <div class="col-lg-12">
                  <div class="ibox-content">
                    <p>Modo de Visualização</p>
                    <div class="inline">
                      <input type="radio" id="inlineRadio1" value="option1" name="radioInline"
                        checked="" />
                      <label for="inlineRadio1">Manhã</label>

                      <input type="radio" id="inlineRadio2" value="option2" name="radioInline" />
                      <label for="inlineRadio2">Tarde</label>

                      <input type="radio" id="inlineRadio3" value="option3" name="radioInline" />
                      <label for="inlineRadio3">Noite</label>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="ibox float-e-margins">
                      <div class="table-responsive">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>TEMPOS</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr>
                              <td>2</td>
                              <td>08h00 - 08h45</td>

                              <td class="actions">
                                <a href="javascript:;" data-bs-toggle="tooltip"
                                  data-bs-original-title="Detalhes"
                                  class="btn btn-success btn-xs" onclick="">
                                  <i class="fa fa-edit"></i>
                                </a>
                                <a href="javascript:;" data-bs-toggle="tooltip"
                                  data-bs-original-title="Atualizar"
                                  class="btn btn-primary btn-xs" onclick="">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <button type="button" class="btn btn-w-m btn-primary pull-right">NOVO
                        TEMPO</button>
                    </div>
                  </div>
                </div>
              </div>

              {/*Activação dos trimestres*/}
              <div class="col-lg-12">
                <div class="ibox-content">
                  <p><strong>- Activação dos trimestres </strong></p>
                  <p>As informações que serão definidas aqui terão efeito no formulário de
                    lancamento de notas.</p>
                </div>
                <div class="col-lg-5">
                  <div class="ibox float-e-margins">
                    <div class="form-horizontal">
                      <div class="form-group">
                        <div class="col-lg-5">
                          <select class="form-control" name="" id="">
                            <option value="">2021-2022</option>
                            <option value="">2022-2023</option>
                          </select>
                        </div>
                        <label class=" control-label pull-left">: Ano selecionado</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="col-lg-4">
                    <div class="ibox float-e-margins">
                      <div class="table-responsive">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>TRIMESTRE</th>
                              <th>ESTADO</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>1º Trimestre</td>
                              <td class="totacol">Activo</td>

                              <td class="actions">
                                <a href="javascript:;" data-bs-toggle="tooltip"
                                  data-bs-original-title="Alterar"
                                  class="btn btn-primary btn-xs" onclick="">
                                  <i class="fa fa-refresh"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="col-lg-5">
                    <div class="ibox float-e-margins">
                      <div class="form-horizontal">
                        <p>Critério de lancamento das notas:</p>
                        <div class="form-group">
                          <div class="col-lg-5">
                            <select class="form-control" name="">
                              <option value="">TODAS</option>
                              <option value="">MAC</option>
                              <option value="">NPP</option>
                              <option value="">NPT</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Opções de finanças*/}
              <div class="col-lg-12">
                <p class="bg-silver"><strong>Opções de finanças</strong></p>

                <div class="col-lg-7">
                  <div class="ibox float-e-margins">
                    <div class="form-horizontal">
                      <div class="form-group">
                        <p class=" control-label pull-left"> Visualizar os anos lectivos no
                          formulario de pagamento:</p>
                        <div class="col-lg-3">
                          <select class="form-control" name="" id="">
                            <option value="">Sim</option>
                            <option value="">Não</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class=" control-label pull-left"> Exibir as Cordenadas Bancárias no
                          Recibo de pagamento:</p>
                        <div class="col-lg-3">
                          <select class="form-control" name="" id="">
                            <option value="">Sim</option>
                            <option value="">Não</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class=" control-label pull-left"> Agrupar os pagamentos da mesma data
                          em apenas um recibo:</p>
                        <div class="col-lg-3">
                          <select class="form-control" name="" id="">
                            <option value="">Sim</option>
                            <option value="">Não</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class=" control-label pull-left"> Tipo de cobrança de acordo o
                          sistema de ensino:</p>
                        <div class="col-lg-3">
                          <select class="form-control" name="" id="">
                            <option value="">Padrão</option>
                            <option value="">UNESCO</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class=" control-label pull-left"> Orientação do recibo de pagamento
                          no formato A4:</p>
                        <div class="col-lg-3">
                          <select class="form-control" name="" id="">
                            <option value="">Vertical</option>
                            <option value="">Horizontal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ibox-content">
                  <p><strong>- Activação das Formas de Pagamentos </strong></p>
                  <p>As informações que serão definidas aqui, terão efeito no formulário de
                    pagamentos.</p>
                </div>

                <div class="col-lg-12">
                  <div class="col-lg-4">
                    <div class="ibox float-e-margins">
                      <div class="table-responsive">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>FORMAS DE PAGAMENTO</th>
                              <th>ESTADO</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Númerario</td>
                              <td class="text-danger">Desactivo</td>

                              <td class="actions">
                                <a href="javascript:;" data-bs-toggle="tooltip"
                                  data-bs-original-title="Alterar"
                                  class="btn btn-primary btn-xs" onclick="">
                                  <i class="fa fa-refresh"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Banco</td>
                              <td class="totacol">Activo</td>

                              <td class="actions">
                                <a href="" data-bs-toggle="tooltip"
                                  data-bs-original-title="Alterar"
                                  class="btn btn-primary btn-xs" onclick="">
                                  <i class="fa fa-refresh"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Opções do sistema*/}
              <div class="col-lg-12">
                <p class="bg-silver"><strong>Opções do Sistema</strong></p>
                <div class="col-lg-12">
                  <p class="bg-silver"><strong>Verificações</strong></p>
                </div>
                <div class="col-lg-12">
                  <div class="ibox float-e-margins">
                    <div class="form-horizontal">
                      <div class="form-group">
                        <p class="control-label pull-left"> Verificar se o aluno concluíu com
                          êxito o ano académico, no acto da confirmação: </p>
                        <div class="col-lg-2">
                          <select class="form-control" name="" id="">
                            <option value="">Sim</option>
                            <option value="">Não</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class=" control-label pull-left"> Verificar a situação financeira do
                          aluno, no acto da confirmação:</p>
                        <div class="col-lg-2">
                          <select class="form-control" name="" id="">
                            <option value="">Sim</option>
                            <option value="">Não</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class=" control-label pull-left"> Serviços obrigatório no acto da
                          confirmação:</p>
                        <div class="col-lg-2">
                          <button type="button"
                            class="btn btn-w-m btn-primary btn-outline">SERVIÇOS</button>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class=" control-label pull-left"> Especificar o mês de conclusão de
                          pagamento:</p>
                        <div class="col-lg-2">
                          <select class="form-control" name="" id="">
                            <option value="">Janeiro</option>
                            <option value="">Fevereiro</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class="control-label pull-left"> Especificar o mês de conclusão de
                          pagamento para as classes de exame:</p>
                        <div class="col-lg-2">
                          <select class="form-control" name="" id="">
                            <option value="">Janeiro</option>
                            <option value="">Fevereiro</option>
                          </select>
                        </div>
                      </div>

                      <p><strong>- Excessões </strong></p>

                      <div class="form-group">
                        <p class=" control-label pull-left"> O sistema faça a verificação no
                          acto de efectuamento dos pagamento para todos:</p>
                        <div class="col-lg-2">
                          <select class="form-control" name="" id="">
                            <option value="">Sim</option>
                            <option value="">Não</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class="col-lg-7"> Abrir uma excessão temporaria para
                          alunos que desejam efectuar o pagamento apartir de um determinado
                          mês, afim de, não ser verificado pelo sistema:</p>
                        <div class="col-lg-3">
                          <button type="button"
                            class="btn btn-w-m btn-primary btn-outline">ABRIR
                            EXCESSÃO</button>
                        </div>
                      </div>

                      <div class="form-group">
                        <p class="col-lg-7"> Abrir uma excessão para alunos que
                          efectuarão no pagamento em percentagem:</p>
                        <div class="col-lg-2">
                          <button type="button"
                            class="btn btn-w-m btn-primary btn-outline">ABRIR
                            EXCESSÃO</button>
                        </div>
                      </div>
                      <div class="form-group">
                        <p class="col-lg-7"> Abrir excessão para alunos que não
                          efectuarão o pagamento de um determinado serviço, afim de, não
                          aparecerem nos relatórios de devedores.</p>
                        <div class="col-lg-3">
                          <button type="button"
                            class="btn btn-w-m btn-primary btn-outline">ABRIR
                            EXCESSÃO</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Definições de Multas*/}
              <div class="col-lg-12">
                <p class="bg-silver"><strong>Definições de Multas</strong></p>
                <br />
                <div class="col-lg-8">
                  <div class="ibox float-e-margins">
                    <div class="table-responsive">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>SERVIÇO</th>
                            <th>TIPO</th>
                            <th>TAXA - VALOR</th>
                            <th>PRAZO(DIA)</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Propina</td>
                            <td>Percentagem</td>
                            <td>35%</td>
                            <td>10</td>

                            <td class="actions">
                              <a href="javascript:;" data-bs-toggle="tooltip"
                                data-bs-original-title="Eliminar"
                                class="btn btn-primary btn-xs" onclick="">
                                <i class="fa fa-trash"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 border-left-right border-top-bottom">
                  <div class="ibox float-e-margins">

                    <div class="ibox-content">
                      <form role="form">
                        <div class="form-group">
                          <label>Serviços</label>
                          <select class="form-control" name="" id="">
                            <option value="">Matrícula</option>
                            <option value="">Confirmação</option>
                            <option value="">Propina</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <center>
                            <p>Tipo</p>


                            <input type="radio" id="" value="" name="" checked="true" />
                            <label for="rbPercent">Percenagem(%)</label>

                            <input type="radio" id="" value="" name="" />
                            <label for="rbValor">Valor</label>

                          </center>
                        </div>
                        <div class="form-group">
                          <div class="col-lg-6">
                            <input type="text" placeholder="Percentagem"
                              class="form-control" />
                          </div>
                          <div class="col-lg-6">
                            <select class="form-control" name="" id="">
                              <option value="">Sim</option>
                              <option value="">Não</option>
                            </select>
                          </div>

                        </div>
                        <br /><br /><br />
                        <div class="form-group form-horizontal">
                          <center>
                            <button class="btn btn-sm btn-primary "
                              type="submit"><strong>DEFINIR</strong></button>
                          </center>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>


              {/*Definições de Impostos*/}
              <div class="col-lg-12">
                <p class="bg-silver"><strong>Definições de Impostos</strong></p>
                <br />
                <div class="row">
                  <div class="col-lg-3">
                    <div class="widget style1 white-bg">
                      <div class="row">
                        <div class="col-xs-3">
                          <img class="img-md w-150" src={agt} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="widget style1">
                      <div class="row">
                        <div class="col-xs-8 text-right ">
                          <button class="btn btn-primary mt-3" onclick=""> NOVO TIPO
                            IMPOSTO</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="ibox float-e-margins">
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>REGIME</th>
                          <th>PAÍS</th>
                          <th>IMPOSTO</th>
                          <th>DESCRIÇÃO</th>
                          <th>TAXA</th>
                          <th>MOTIVO</th>
                          <th>DESCRIÇÃO DO MOTIVO</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>IVA</td>
                          <td>AO</td>
                          <td>ISE</td>
                          <td>ISENTO</td>
                          <td>0,00</td>
                          <td>M21</td>
                          <td>Isento nos termos da alínea l) do nº1 do artigo 12.º do CIVA%
                          </td>
                          <td class="actions">
                            <a href="javascript:;" data-bs-toggle="tooltip"
                              data-bs-original-title="Editar"
                              class="btn btn-primary btn-xs" onclick="">
                              <i class="fa fa-edit"></i>
                            </a>
                            <a href="javascript:;" data-bs-toggle="tooltip"
                              data-bs-original-title="Eliminar"
                              class="btn btn-primary btn-xs" onclick="">
                              <i class="fa fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="tab-2" class="tab-pane">
            <div class="panel-body">
              <strong>Dados da escola</strong>
            </div>
          </div>
          {/*Tab sobre*/}
          <div id="tab-3" class="tab-pane">
            <div class="panel-body">
              <div class="col-lg-12">
                <p class="bg-silver"><strong>Acerca do software</strong></p>

                <div class="col-lg-12">
                  <div class="widget style1 white-bg">
                    <div class="row">
                      <div class="col-xs-3">
                        <img class="img-lg h-300 w-300" src={caracollogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p class="col-lg-12">CARACOL</p>

                <p class="col-lg-12">Versão 5.0.2</p>

                <p class="col-lg-12">Copyright &copy; 2020 Wobotec. Todos os direitos reservados.</p>

                <p class="col-lg-6 text-justify">CARACOL é um software de gestão escolar ideal para a
                  sua escola.
                  Ela vem integrado com todos os módulos requisitado no mercado,
                  trazendo consigo informações actualizadas sobre os novos modelos
                  implementados nos subsistemas escolares.
                  Este software foi desenvolvido pela empresa Wobotec no ano de 2020.
                  Para mais informações, entre em contacto connosco apartir do nosso
                  e-mail ou página oficial do facebook.
                </p>

                <p class="col-lg-12">E-mail: <u class="text-success">wobotec.ao@gmail.com</u></p>
                <p class="col-lg-12">Facebook: <a href="https://www.facebook.com/wobotec">Wobotec</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>                
    </PageBase >
  );
}
