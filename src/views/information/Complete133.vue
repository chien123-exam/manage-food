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
          <h2 class="section_title">登録完了</h2>
        </div>
        <div class="container">

          <div class="thanks_frame">
            <p>
              登録が完了しました。
            </p>
            <p>
              受付メールを送信しましたので、<br>ご確認をお願いいたします。
            </p>
          </div>

          <div class="button">
            <div class="flex_wrap">
              <div>
                <a href="cart-lunch_p2.html" class="button01">
                  カレンダーTOPへ
                </a>
              </div>
              <div>
                <a href="cart-lunch_p1.html" class="button01">
                  マイページへ
                </a>
              </div>
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