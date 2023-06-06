<template>
   <layout>
        <template #content>
                <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>


      <section>
        <div class="section_header">
          <h2 class="section_title">ご質問・ご相談はこちら</h2>
        </div>
        <div class="container">

          <div class="form_frame">

            <div class="form_box">

              <div class="form_headline">
                種類
              </div>
                <select name="">
                  <option>選択してください</option>
                  <option>選択肢</option>
                  <option>選択肢</option>
                  <option>選択肢</option>
                  <option>選択肢</option>
                </select>

            </div>


            <div class="form_box">

              <div class="form_headline">
                お問い合わせ内容
              </div>
                <textarea name="" class="contact_textarea" placeholder="お問い合わせ・ご相談内容を入力してください">
                </textarea>

            </div>

          </div>


          <div class="button">
            <div>
              <input type="submit" class="button01" name="Submit" value="送信">
            </div>
          </div>


        </div>
      </section>


    </main>
        </template>
   </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>