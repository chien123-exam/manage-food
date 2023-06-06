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
        <h2 class="section_title">注文者情報の登録</h2>
      </div>


      <div class="column2_container">
        <div class="column2 flex_wrap reverse">
          <div class="main">



      <section>
        <h3 class="section_sub_title">
          管理者アカウントで複数名分の注文ができます
        </h3>

        <form action="cart-lunch_p13_2.html">
          <div class="container"/>
            <div class="form_frame">
              <!-- フォーム -->
              <div>



            <div class="group_register">

              <div class="group_register_box">
                <div class="form_box">

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
                  <input type="text"  class="group_name" name="group_name_1" placeholder="山田　太郎" value="秋山太郎">
                </div>

                <div class="form_box">

                      <div class="group_btn">
                        <div class="group_delete">-</div><div class="group_addition">+</div>
                      </div>
                </div>
              </div>

            </div>




                
              </div>



            </div>

          </div>

            <div class="button">
              <div>
                <input type="submit" class="button01" name="Submit" value="確認画面へ">
              </div>
            </div>

        </form>



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