<template>
    <layout>
        <template #content>
                <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>
      <div class="section_header">
        <h2 class="section_title">注文者情報の管理（現在2名の登録）</h2>
      </div>


      <div class="container_inner">
        <div class="2column flex_wrap reverse">
          <div class="main">


      <section>
        <div class="container">

          <div class="order_frame border">
            <table>

              <tr>
                <th>登録日時</th>
                <td>
                  2022年8月31日（水）　09︓30
                </td>
              </tr>

              <tr>
                <th>所属（学年・クラス）</th>
                <td>
                  １年１組
                </td>
              </tr>

              <tr>
                <th>ご注文者名</th>
                <td>
                  秋山愛子
                </td>
              </tr>

            </table>

            <div class="order_admin_btn">
              <div class="edit_admin_btn">
                <a href="cart-lunch_p13.html">
                  編集する
                </a>
              </div>
            </div>

          </div>

          <div class="order_frame border">
            <table>

              <tr>
                <th>登録日時</th>
                <td>
                  2022年8月31日（水）　09︓30
                </td>
              </tr>

              <tr>
                <th>所属（学年・クラス）</th>
                <td>
                  １年１組
                </td>
              </tr>

              <tr>
                <th>ご注文者名</th>
                <td>
                  秋山愛子
                </td>
              </tr>

            </table>

            <div class="order_admin_btn">
              <div class="edit_admin_btn">
                <a href="cart-lunch_p13.html">
                  編集する
                </a>
              </div>
            </div>

          </div>




            <div class="button" id="order_group">
              <div class="order_group_off">
                <div class="button01">
                  ＋　注文者登録
                </div>
              </div>
              <div class="order_group_on">
                <div class="button02">
                  －　注文者登録をやめる
                </div>
              </div>
            </div>

            <div class="order_group_register">

              <div class="order_group_register_inner">

                <div class="order_group_register_box">


                <div class="form_box">
                  <div class="form_headline">
                    所属（学年・クラス）
                  </div>
                  <select class="group_class" name="group_class_1">
                    <option>1年1組</option>
                    <option>1年2組</option>
                    <option>1年3組</option>
                    <option>1年4組</option>
                    <option>1年5組</option>
                    <option>1年6組</option>
                  </select>
                </div>


                <div class="form_box">
                  <div class="form_headline">
                    管理者名
                  </div>
                  <input type="text"  class="group_name" name="group_name_1" placeholder="山田　太郎">
                </div>

                </div>


              </div>
                <div>
                  <div class="order_group_btn">
                    <div class="order_group_delete">-</div><div class="order_group_addition">+</div>
                  </div>
                </div>



          <div class="button">
            <div>
              <input type="submit" class="button01" name="Submit" value="この情報で登録する">
            </div>
          </div>
            </div>




        </div>
      </section>
          </div>
          <div id="side" class="side">
          </div>
        </div>
      </div>


    </main>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>