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
          <h2 class="section_title">送信完了</h2>
        </div>
        <div class="container">

          <div class="thanks_frame">
            <p>
              注文予約が完了しました。
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
      
      <div class="calendar_info">
        <p>
          ご注文期限：当日９：００まで
        </p>
        <ul>
          <li>各種注釈をここにテキスト反映します。</li>
          <li>毎週〇曜日のメニューは日替りメニューとなります。詳しくはスタッフまでご確認ください。</li>
          <li>容器回収は、原則次回お届け日の回収となります。</li>
        </ul>
      </div>


    </main>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>