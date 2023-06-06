<template>
    <layout>
        <template #content>
               <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>


      <form action="cart-lunch_p3_4.html">
      <section class="orange_back">

        <div class="section_header">
          <h2 class="section_title">注文内容の確認</h2>
        </div>
        <div class="container">
          <div class="order_frame">
            <table>

              <tr>
                <th>注文者</th>
                <td>
                  秋山愛子
                </td>
              </tr>

              <tr>
                <th>引渡し先</th>
                <td>
                  東京都立第一中学校
                </td>
              </tr>

              <tr>
                <th>引渡し日</th>
                <td>
                  9月5日（月）・9月6日（火）・9月7日（水）
                </td>
              </tr>

              <tr>
                <th>商品</th>
                <td>

                  <div class="item_result">
                    <dl>
                      <dt>
                        日替り弁当Ａ　780円×3個
                        <div class="item_delete">削除</div>
                      </dt>
                      <dd>
                        ご飯の量：大盛り　＋80円<br>
                        ご飯の種類：味ご飯に変更　＋100円<br>
                        オプション：みそ汁＋季節のサラダ　＋200円
                      </dd>
                    </dl>
                  </div>
                  
                </td>
              </tr>

              <tr>
                <th>対象日の合計</th>
                <td class="price">
                  3個　2,340円
                </td>
              </tr>

            </table>
          </div>
        </div>

        <div class="section_header">
          <h2 class="section_title">お支払い方法の選択</h2>
        </div>
        <div class="container">

          <div class="form_frame">
            <div class="form_box">
              <label>
                <input type="radio" name="pay" value="" checked>月末支払い（口座振替）
              </label><br>
              <a href="" class="pay_link font_16">
                お支払い設定を確認する
              </a>
            </div>
          </div>
        </div>


        <div class="container">
          <div class="button">
            <div class="flex_wrap">
              <div>
                <a href="javascript:history.back();" class="button02">
                  戻る
                </a>
              </div>
              <div>
                <input type="submit" class="button01" name="Submit" value="この内容で注文予約">
              </div>
            </div>
          </div>

        </div>
      </section>
      </form>

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