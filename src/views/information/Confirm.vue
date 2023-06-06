<template>
    <layout>
        <template #content>
                <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>


      <form action="cart-lunch_p13_3.html">
      <section>
        <div class="section_header">
          <h2 class="section_title">登録内容の確認</h2>
        </div>
        <div class="container">

          <div class="form_frame check_form_register">
            <dl>
              <dt>
                所属（学年・クラス）
              </dt>
              <dd>
                １年１組
                <input type="hidden" name="" value="">
              </dd>
            </dl>
            <dl>
              <dt>
                ご注文者名
              </dt>
              <dd>
                秋山愛子
                <input type="hidden" name="" value="">
              </dd>
            </dl>
          </div>

          <div class="form_frame check_form_register last">
            <dl>
              <dt>
                所属（学年・クラス）
              </dt>
              <dd>
                ４年２組
                <input type="hidden" name="" value="">
              </dd>
            </dl>
            <dl>
              <dt>
                ご注文者名
              </dt>
              <dd>
                秋山由香里
                <input type="hidden" name="" value="">
              </dd>
            </dl>
          </div>

          <div class="button">
              <div class="flex_wrap">
                <div>
                  <a href="javascript:history.back();" class="button02">
                    戻る
                  </a>
                </div>
                <div>
                  <input type="submit" class="button01" name="Submit" value="この内容で登録する">
                </div>
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