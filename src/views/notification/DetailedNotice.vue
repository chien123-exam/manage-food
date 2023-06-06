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
          <h2 class="section_title">見出しタイトル</h2>
        </div>
        <div class="container">

          <div class="news_frame">

            <div class="news_box">
              <dl>
                <dt>
                  <svg class="news_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.99 13.99"><defs></defs><g class="news_icon_icon"><g><circle class="cls-2news_icon" cx="7" cy="7" r="7"/><path class="cls-1news_icon" d="m8.06,2.58l-.23,6.26h-1.65l-.24-6.26h2.12Zm-.05,8.83h-2.02v-1.52h2.02v1.52Z"/></g></g></svg>
                  <span class="news_date">2023/03/29</span>
                  <span class="news_headline">見出しタイトル</span>
                </dt>
                <dd>
                  テキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキスト<br>
                  テキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキスト<br>
                  テキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキスト<br>
                  テキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキスト<br>
                  テキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキスト<br>
                  テキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキストテキスト・テキスト・テキスト・テキスト・テキスト<br>
                </dd>
              </dl>
            </div>

          </div>

          <div class="button">
            <div>
              <a href="javascript:history.back();" class="button02">お知らせ一覧へ戻る</a>
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

<style scoped>
.cls-1news_icon{fill:#fff;}.cls-2news_icon{fill:#cf3d4f;}
</style>