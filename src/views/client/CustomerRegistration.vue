<template>
   <layout>
        <template #content>
             <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>
      <form>
      <section>
        <div class="section_header">
          <h2 class="section_title">お客様登録</h2>
        </div>
        <div class="container">
          <div class="form_frame">
            <div class="form_box">
              <div class="form_headline">
                商品引渡し先
              </div>
              <label class="side_label">
                <input type="radio" name="destination" value="company" checked>会社
              </label>
              <label class="side_label">
                <input type="radio" name="destination" value="school">学校
              </label>
              <label class="side_label">
                <input type="radio" name="destination" value="home">自宅
              </label>
            </div>
            <!-- 会社･勤務先フォーム -->
            <div>

              <div class="form_box">
                <div class="form_headline">
                  団体名
                </div>
                <input type="text" name="" placeholder="株式会社〇〇">
              </div>
              <div class="form_box">
                <div class="form_headline">
                  所属（引渡し先）
                </div>
                <input type="text" name="" placeholder="営業部">
              </div>

              <div class="form_box">

                <div class="form_headline">
                  管理者名
                </div>
                <input type="text" name="" placeholder="山田　太郎">

              </div>


              <div class="form_box">
                <div class="form_headline">
                  郵便番号
                </div>
                <div class="flex_wrap zip_frame">
                  <div>
                    <input type="text" name="zip31" maxlength="3" placeholder="000">
                  </div>
                  <div>
                    <input type="text" name="zip32" maxlength="4" onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref','pref','addr1');" placeholder="0000">
                  </div>
                </div>
              </div>

              <div class="form_box">
                <div class="form_headline">
                  ご住所
                </div>
                <div class="pref"></div>
                <input type="text" name="addr1" placeholder="〇〇町1-1　〇〇マンション301">
              </div>

              <div class="form_box">

                <div class="form_headline">
                  電話番号
                </div>
                <input type="text" name="" placeholder="000-0000-0000">

              </div>

              <div class="form_box">

                <div class="form_headline">
                  メールアドレス
                </div>
                <input type="email" name="" placeholder="example@example.com">

              </div>

              <div class="form_box">

                <div class="form_headline">
                  パスワード
                </div>
                <input type="text" name="" placeholder="※半角英数字１５文字以内">

              </div>
              
            </div>

            <!-- 学校フォーム -->
            <div id="school_form">

              <div class="form_box">
                <div class="form_headline">
                  団体名
                </div>
                <input type="text" name="" placeholder="〇〇中学校">
              </div>

              <div class="form_box">
                <div class="form_headline">
                  所属（学年・クラス）
                </div>
                <input type="text" name="" placeholder="〇年〇組">
              </div>

              <div class="form_box">
                <div class="form_headline">
                  管理者名
                </div>
                <input type="text" name="" placeholder="山田太郎">
              </div>

              <div class="form_box">
                <div class="form_headline">
                  郵便番号
                </div>
                <div class="flex_wrap zip_frame">
                  <div>
                    <input type="text" name="zip31" maxlength="3" placeholder="000">
                  </div>
                  <div>
                    <input type="text" name="zip32" maxlength="4" onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref','pref','addr1');" placeholder="0000">
                  </div>
                </div>
              </div>

              <div class="form_box">
                <div class="form_headline">
                  ご住所
                </div>
                <div name="pref"></div>
                <input type="text" name="addr1" placeholder="〇〇町1-1　〇〇マンション301">
              </div>

              <div class="form_box">

                <div class="form_headline">
                  電話番号
                </div>
                <input type="text" name="" placeholder="00-0000-0000">

              </div>

              <div class="form_box">

                <div class="form_headline">
                  メールアドレス
                </div>
                <input type="email" name="" placeholder="example@example.com">

              </div>

              <div class="form_box">

                <div class="form_headline">
                  パスワード
                </div>
                <input type="text" name="" placeholder="※半角英数字１５文字以内">

              </div>

            </div>

            <!-- 自宅フォーム -->
            <div id="home_form">
              自宅フォームが表示されます
            </div>

            </div>

          <div class="button">
            <div>
              <input type="submit" class="button01" name="Submit" value="確認画面へ">
            </div>
          </div>


        </div>

      </section>
      </form>


    </main>
        </template>
   </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>