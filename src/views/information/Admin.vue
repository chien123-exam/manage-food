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
        <h2 class="section_title">管理者情報の管理</h2>
      </div>


      <div class="column2_container">
        <div class="column2 flex_wrap reverse">
          <div class="main">



      <section>

        <form action="cart-lunch_p1.html">
          <div class="container">

            <div class="form_frame">

              <div class="form_box">

                <div class="form_headline">
                  商品引渡し先
                </div>

                <!--<label class="side_label">
                  <input type="radio" name="destination" value="company">会社
                </label>-->
                <label class="side_label">
                  <input type="radio" name="destination" value="school" checked>学校
                </label>
                <!--<label class="side_label">
                  <input type="radio" name="destination" value="home">自宅
                </label>-->

              </div>

              <!-- フォーム -->
              <div>
                <div class="form_box">
                  <div class="form_headline">
                    会社名
                  </div>
                  <input type="text" name="" placeholder="株式会社〇〇" value="東京都立第一小学校" readonly="readonly">
                </div>

                

                <div class="form_box">
                  <div class="form_headline">
                    管理者名
                  </div>
                  <input type="text" name="" placeholder="山田　太郎" value="秋山太郎">
                </div>

                <div class="form_box">
                  <div class="form_headline">
                    郵便番号
                  </div>
                  <div class="flex_wrap zip_frame">
                    <div>
                      <input type="text" name="zip31" maxlength="3" placeholder="000" value="221">
                    </div>
                    <div>
                      <input type="text" name="zip32" maxlength="4" onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref','pref','pref');" placeholder="0000" value="0802">
                    </div>
                  </div>
                </div>

                <div class="form_box">
                  <div class="form_headline">
                    ご住所
                  </div>
                  <input type="text" name="pref" class="pref_readonly" readonly="readonly" placeholder="〇〇県〇〇市〇〇区" value="神奈川県横浜市神奈川区">
                  <input type="text" name="addr1" placeholder="〇〇町1-1　〇〇マンション301" value="六角橋３丁目２７">
                </div>

                <div class="form_box">

                  <div class="form_headline">
                    電話番号
                  </div>
                  <input type="text" name="" placeholder="000-0000-0000" value="045-123-4567">

                </div>

                <div class="form_box">

                  <div class="form_headline">
                    FAX 番号（任意）
                  </div>
                  <input type="text" name="" placeholder="00-0000-0000">

                </div>

                <div class="form_box">

                  <div class="form_headline">
                    メールアドレス
                  </div>
                  <input type="email" name="" placeholder="example@example.com" value="example@example.com">

                </div>

                <div class="form_box">

                  <div class="form_headline">
                    現在のパスワード
                  </div>
                  <input type="text" name="" placeholder="※半角英数字１５文字以内" value="passxYz1234">

                </div>
                
                <div class="form_box">

                  <div class="form_headline">
                    新しいパスワード
                  </div>
                  <input type="text" name="" placeholder="※パスワードを変更したい場合は新しいパスワードを入力">

                </div>
                
              </div>



            </div>

          </div>

            <div class="section_header">
              <h2 class="section_title">お支払い方法</h2>
            </div>
            <div class="container">

              <div class="form_frame">
                <div class="form_box">
                  <label>
                    <input type="radio" name="pay" value="" checked>月末支払い（口座振替）
                  </label><br>
                  <span class="pay_span font_16">
                    締日や振替日については別途ご案内
                  </span>
                </div>
              </div>
            </div>


            <div class="button">
              <div>
                <input type="submit" class="button01" name="Submit" value="この情報で登録する">
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